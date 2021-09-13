import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html lang="ru">
        <Head>

          <link rel="icon" href="favicon.svg" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" cross-origin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>

          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="keywords" content="тендеры, закупки, аукцион, конкурс, запрос предложений, 
          запрос котировок, конструктор закупочной документации, конструктор договоров, документов онлайн, составить документ, 
          составить договор, составить доверенность, выставить счет, настроить документ онлайн, каталог юридических документов" />
          <meta name="description" content="Конструктор закупочной документации и договоров: онлайн сервис для создания и ведения любого типа документов. 
          На сайте можно: Подготовить шаблон закупочной документации, создать и настроить юридические документы; Посмотреть шаблоны и образцы заполнения; 
          Получить бесплатную консультацию юриста." />
	
        </ Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;