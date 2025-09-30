# Multi-stage build for optimized production image
FROM node:22-alpine AS base

# Install system dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    vips-dev \
    && rm -rf /var/cache/apk/*

# Build stage
FROM base AS build

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci --no-audit --no-fund && \
    npm cache clean --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-alpine AS production

# Install only runtime dependencies
RUN apk add --no-cache vips-dev && \
    rm -rf /var/cache/apk/*

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S strapi -u 1001

WORKDIR /app

# Copy built application from build stage
COPY --from=build --chown=strapi:nodejs /app ./

# Create necessary directories with proper permissions
RUN mkdir -p data public/uploads && \
    chown -R strapi:nodejs data public/uploads

# Switch to non-root user
USER strapi

# Health check (optional - can be added later if needed)
# HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
#     CMD curl -f http://localhost:1337/_health || exit 1

# Expose port
EXPOSE 1337

# Use exec form for better signal handling
CMD ["npm", "start"]