export interface CreatedTime {
  id: string;
  type: 'created_time';
  created_time: string;
}

export interface RichText {
  id: 'string';
  type: 'rich_text';
  rich_text: {
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    href: string;
    plain_text: string;
    text: {
      content: string;
      link: string;
    };
    type: string;
  }[];
}

export interface CheckBox {
  id: 'string';
  type: 'checkbox';
  checkbox: boolean;
}

export interface Title {
  id: 'string';
  type: 'title';
  title: {
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    href: string;
    plain_text: string;
    text: {
      content: string;
      link: string;
    };
    type: string;
  }[];
}
