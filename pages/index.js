import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Chit Chat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="content">
          <div>
            <img src="/phone.png" className="img_phone"/>
          </div>
          <div className="wrapper">
            <Link href="/">
              <img src="/apple.png" className="btn_apple"/>
            </Link>
            <Link href="/">
              <img src="/googleplay.png" className="btn_apple"/>
            </Link>
            <Link href="/">
              <img src="/apk.png" className="btn_apple"/>
            </Link>
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
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #F1F1F1;
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
          width: 252px;
        }

        .content {
          flex-direction: row;
        }

        .btn_apple {
          width: 200px;
          cursor: pointer;
        }
        
        .btn_apple + .btn_apple {
          margin-top: 15px;
        }

        .wrapper {
          flex-direction: column;
        }

        .link {
          color: #929292;
          font-size: 14px;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
