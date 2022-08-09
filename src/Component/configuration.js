import CustomVariable from './Editor/custom-variable';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Warning from '@editorjs/warning';
import Checklist from '@editorjs/checklist';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import Table from '@editorjs/table';
import Link from '@editorjs/link';
import ImageTool from '@editorjs/image';

const Configuration = () => {
  return {
    holder: 'editorjs',
    autofocus: true,

    tools: {
      paragraph: {
        config: {
          placeholder: 'Enter something',
        },
      },

      variable: {
        class: CustomVariable,
        inlineToolbar: true,
      },

      header: {
        class: Header,
        inlineToolbar: ['link'],
        config: {
          placeholder: 'Header',
        },
        shortcut: 'CMD+SHIFT+H',
      },

      image: {
        class: ImageTool,
        config: {
          endpoints: {
            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
            byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
          }
        }
      },

      list: {
        class: List,
        inlineToolbar: true,
        shortcut: 'CMD+SHIFT+L',
      },

      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },

      quote: {
        class: Quote,
        inlineToolbar: true,
        config: {
          quotePlaceholder: 'Enter a quote',
          captionPlaceholder: "Quote's author",
        },
        shortcut: 'CMD+SHIFT+O',
      },

      warning: Warning,

      marker: {
        class: Marker,
        shortcut: 'CMD+SHIFT+M',
      },

      // code: {
      //   class: CodeTool,
      //   shortcut: 'CMD+SHIFT+C',
      // },

      delimiter: Delimiter,

      

      linkTool: Link,

      embed: Embed,

      table: {
        class: Table,
        inlineToolbar: true,
        shortcut: 'CMD+ALT+T',
      },
    },

    /**
     * Internationalzation config
     */
    i18n: {
      messages: {
        ui: {
          blockTunes: {
            toggler: {
              'Click to tune': 'Нажмите, чтобы настроить',
              'or drag to move': 'или перетащите',
            },
          },
          inlineToolbar: {
            converter: {
              'Convert to': 'Конвертировать в',
            },
          },
          toolbar: {
            toolbox: {
              Add: 'Добавить',
            },
          },
        },

        /**
         * Section for translation Tool Names: both block and inline tools
         */
        toolNames: {
          Text: 'Параграф',
          Heading: 'Заголовок',
          List: 'Список',
          Warning: 'Примечание',
          Checklist: 'Чеклист',
          Quote: 'Цитата',
          Code: 'Код',
          Delimiter: 'Разделитель',
          'Raw HTML': 'HTML-фрагмент',
          Table: 'Таблица',
          Link: 'Ссылка',
          Marker: 'Маркер',
          Bold: 'Полужирный',
          Italic: 'Курсив',
          InlineCode: 'Моноширинный',
          Image: 'Изображения',
          Ordered: 'Упорядоченный',
          Unordered: 'Неупорядоченный',
          Filter: 'Филтрация',
          CustomVariable: 'Переменный',
        },

        /**
         * Section for passing translations to the external tools classes
         */
        tools: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded plugin
           * The name of a plugin should be equal the name you specify in the 'tool' section for that plugin
           */
          warning: {
            // <-- 'Warning' tool will accept this dictionary section
            Title: 'Название',
            Message: 'Сообщение',
          },

          /**
           * Link is the internal Inline Tool
           */
          link: {
            'Add a link': 'Вставьте ссылку',
          },
          /**
           * The "stub" is an internal block tool, used to fit blocks that does not have the corresponded plugin
           */
          stub: {
            'The block can not be displayed correctly.':
              'Блок не может быть отображен',
          },
        },

        /**
         * Section allows to translate Block Tunes
         */
        blockTunes: {
          /**
           * Each subsection is the i18n dictionary that will be passed to the corresponded Block Tune plugin
           * The name of a plugin should be equal the name you specify in the 'tunes' section for that plugin
           *
           * Also, there are few internal block tunes: "delete", "moveUp" and "moveDown"
           */
          ordered: {
            Ordered: 'Упорядоченный',
          },
          unordered: {
            Unordered: 'Неупорядоченный',
          },
          delete: {
            Delete: 'Удалить',
          },
          moveUp: {
            'Move up': 'Переместить вверх',
          },
          moveDown: {
            'Move down': 'Переместить вниз',
          },
        },
      },
    },

    data: {
      blocks: [
        
      ],
    },
  };
};

export default Configuration;
