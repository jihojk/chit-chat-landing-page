import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chit Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content">
          <div className="mobileTitleWrapper">
            <img src="/logo.png" className="logo"/>
            <div className="title">ChitChat</div>
          </div>
          <div>
            <img src="/phone.png" className="img_phone"/>
          </div>
          <div className="wrapper">
            <div className="titleWrapper">
              <img src="/logo.png" className="logo"/>
              <div className="title">ChitChat</div>
            </div>

            <div className="txt_create">Create, Share, and Earn</div>

            <div className="txt_your">Your content. Your money.</div>

            <a href="https://apps.apple.com/us/app/chitchatsv/id1490253270" className="apple_wrapper" target="_blank">
              <img src="/apple.png" className="btn_apple"/>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.chitchatme.io" className="apple_wrapper" target="_blank">
              <img src="/googleplay.png" className="btn_apple"/>
            </a>
            <a href="https://s3.us-east-2.amazonaws.com/stage.assets.chitchat/ChitChat_v0.1.apk" className="apple_wrapper">
              <img src="/apk.png" className="btn_apple"/>
            </a>
          </div>
        </div>
      </main>

      <footer>
        <a className="link" href="/faq_v2.pdf" target="_blank">FAQ</a>
        <a className="link" href="/ToS.pdf" target="_blank">Terms of Service</a>
        <a className="link" href="/CC_Privacy_Policy.pdf" target="_blank">Privacy Policy</a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          flex-direction: column;
          background-color: #F1F1F1;
          align-items: stretch;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          align-self: center;
          max-width: 900px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .img_phone {
          width: 307px;
        }

        .content {
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          max-width: 900px;
          width: 100%;
          padding: 30px 20px;
        }
        
        .titleWrapper {
          align-items: center;
        }
        
        .logo {
          width: 77px;
        }
        
        .title {
          font-size: 40px;
          margin-left: 15px;
        }
        
        .txt_create {
          font-size: 42px;
          margin-top: 50px;
        }
        
        .txt_your {
          font-size: 24px;
          margin-top: 50px;
        }

        .btn_apple {
          width: 200px;
        }
        
        .apple_wrapper {
          margin-top: 60px;
        }
        
        .apple_wrapper + .apple_wrapper {
          margin-top: 20px;
        }

        .wrapper {
          flex-direction: column;
          flex: none;
          align-items: center;
          margin-bottom: 60px;
        }

        .link {
          color: #929292;
          font-size: 14px;
        }
        
        .mobileTitleWrapper{
          display: none;
        }

        @media (max-width: 800px) {
          .content {
            flex-direction: column;
            padding: 30px 20px;
          }
          
          .wrapper {
            margin: 50px 0 0;
          }
          
          .txt_create {
            text-align: center;
            margin-top: 0;
          }
          
          .titleWrapper{
            display: none;
          }
          
          .mobileTitleWrapper {
            align-items: center;
            display: flex;
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 500px) {
          .content {
            padding: 30px 10px;
          }
        }
      `}</style>
    </div>
  )
}
