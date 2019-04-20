import Page from '~layouts/main_inicio'
import Head from '~components/head_inicio'

export default () => (
  <Page>
    <Head title="GestIF | Página Inicial">
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/reset.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/site.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/container.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/grid.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/header.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/image.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/menu.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/divider.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/dropdown.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/segment.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/button.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/list.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/icon.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/sidebar.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="../dist/components/transition.css"
      />

      <style jsx global>
        {`
            body {
              background-color: black;
             }

            .hidden.menu{ 
              display: none;
            }

            .masthead.segment {
              min-height: 700px;
              padding: 1em 0em;
            }
            .masthead .logo.item img {
              margin-right: 1em;
            }
            .masthead .ui.menu .ui.button {
              margin-left: 0.5em;
            }
            .masthead h1.ui.header {
              margin-top: 3em;
              margin-bottom: 0em;
              font-size: 4em;
              font-weight: normal;
            }
            .masthead h2 {
              font-size: 1.7em;
              font-weight: normal;
            }

            .ui.vertical.stripe {
              padding: 8em 0em;
            }
            .ui.vertical.stripe h3 {
              font-size: 2em;
            }
            .ui.vertical.stripe .button + h3,
            .ui.vertical.stripe p + h3 {
              margin-top: 3em;
            }
            .ui.vertical.stripe .floated.image {
              clear: both;
            }
            .ui.vertical.stripe p {
              font-size: 1.33em;
            }
            .ui.vertical.stripe .horizontal.divider {
              margin: 3em 0em;
            }

            .quote.stripe.segment {
              padding: 0em;
            }
            .quote.stripe.segment .grid .column {
              padding-top: 5em;
              padding-bottom: 5em;
            }

            .footer.segment {
              padding: 5em 0em;
            }

            .secondary.pointing.menu .toc.item {
              display: none;
            }

            @media only screen and (max-width: 700px) {
              .ui.fixed.menu {
                display: none !important;
              }
              .secondary.pointing.menu .item,
              .secondary.pointing.menu .menu {
                display: none;
              }
              .secondary.pointing.menu .toc.item {
                display: block;
              }
              .masthead.segment {
                min-height: 350px;
              }
              .masthead h1.ui.header {
                font-size: 2em;
                margin-top: 1.5em;
              }
              .masthead h2 {
                margin-top: 0.5em;
                font-size: 1.5em;
              }`}
      </style>
      <script src="assets/library/jquery.min.js" />
      <script src="../dist/components/visibility.js" />
      <script src="../dist/components/sidebar.js" />
      <script src="../dist/components/transition.js" />
    </Head>
    <div class="ui large top fixed hidden menu">
      <div class="ui container">
        <a class="active item">Início</a>
        <a class="item">Monitorias</a>
        <a class="item">PAE</a>
        <a class="item">Report à CSTI</a>
        <div class="right menu">
          <div class="item">
            <a class="ui button">Login</a>
          </div>
        </div>
      </div>
    </div>

    <div class="ui vertical inverted sidebar menu">
      <a class="active item">Início</a>
      <a class="item">Monitorias</a>
      <a class="item">PAE</a>
      <a class="item">Report à CSTI</a>
      <a class="item">Login</a>
    </div>

    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <a class="active item" href="/inicio">
              Início
            </a>
            <a class="item">Monitorias</a>
            <a class="item" href="/cotp/pae">
              PAE
            </a>
            <a class="item" href="/csti/reportar">
              Report à CSTI
            </a>
            <div class="right item">
              <a class="ui inverted button" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pusher">
      <div class="ui inverted vertical masthead center aligned segment">
        <div class="ui text container" style={{ heigth: 700 }}>
          <br />
          <br />
          <br />
          <br />
          <h1 class="ui inverted header" style={{ fontSize: 57 }}>
            GestIF
          </h1>
          <h2 style={{ fontSize: 30 }}>O sistema</h2>
          <br />
          <br />
          <br />
          <br />
          <h3>14 de julho no auditório</h3>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </Page>
)
