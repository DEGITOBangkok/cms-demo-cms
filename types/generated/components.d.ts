import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    Address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    MapAddress: Schema.Attribute.Text;
    Phonenumber: Schema.Attribute.String;
    Time: Schema.Attribute.Text;
  };
}

export interface SharedContactFormField extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_form_fields';
  info: {
    displayName: 'ContactFormField';
  };
  attributes: {
    attachment: Schema.Attribute.Component<'shared.label', false>;
    contactFileRule: Schema.Attribute.String;
    email: Schema.Attribute.Component<'shared.label', false>;
    firstName: Schema.Attribute.Component<'shared.label', false>;
    lastName: Schema.Attribute.Component<'shared.label', false>;
    message: Schema.Attribute.Component<'shared.label', false>;
    phoneNumber: Schema.Attribute.Component<'shared.label', false>;
    privacy: Schema.Attribute.Text;
  };
}

export interface SharedImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    Img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_labels';
  info: {
    displayName: 'label';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface SharedLinkOut extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_outs';
  info: {
    displayName: 'linkOut';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedPageElements extends Struct.ComponentSchema {
  collectionName: 'components_shared_page_elements';
  info: {
    displayName: 'PageElements';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {};
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 150;
        minLength: 50;
      }>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedVideo extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    displayName: 'video';
  };
  attributes: {
    youtubeUrl: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.contact': SharedContact;
      'shared.contact-form-field': SharedContactFormField;
      'shared.image': SharedImage;
      'shared.label': SharedLabel;
      'shared.link-out': SharedLinkOut;
      'shared.media': SharedMedia;
      'shared.page-elements': SharedPageElements;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.video': SharedVideo;
    }
  }
}
