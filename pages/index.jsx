export default function LovePage() {
  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        body{
          overflow:hidden;
        }

        .container{
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(-45deg,#ff6ec4,#7873f5,#4facfe,#43e97b);
          background-size:400% 400%;
          animation:gradient 12s ease infinite;
          position:relative;
        }

        @keyframes gradient{
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;}
        }

        .card{
          background:rgba(243, 227, 227, 0.18);
          backdrop-filter:blur(15px);
          border:1px solid rgba(255,255,255,.3);
          border-radius:30px;
          padding:60px;
          text-align:center;
          color:white;
          box-shadow:0 15px 35px rgba(0,0,0,.25);
          animation:float 3s ease-in-out infinite;
          z-index:2;
        }

        @keyframes float{
          0%,100%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
        }

        h1{
          font-size:4rem;
          margin-bottom:20px;
          text-shadow:0 0 20px rgba(255,255,255,.6);
        }

        h2{
          font-size:2.8rem;
          color:#fff8b5;
          margin-bottom:15px;
          animation:pulse 2s infinite;
        }

        p{
          font-size:1.3rem;
          opacity:.95;
        }

        @keyframes pulse{
          0%,100%{
            transform:scale(1);
          }
          50%{
            transform:scale(1.08);
          }
        }

        .heart{
          position:absolute;
          font-size:2rem;
          animation:rise linear infinite;
          opacity:.8;
        }

        @keyframes rise{
          from{
            transform:translateY(110vh) rotate(0deg);
            opacity:0;
          }
          15%{
            opacity:1;
          }
          to{
            transform:translateY(-20vh) rotate(360deg);
            opacity:0;
          }
        }
      `}</style>

      <div className="container">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${20 + Math.random() * 35}px`,
            }}
          >
            ❤️
          </span>
        ))}

        <div className="card">
          <h1>💖</h1>
          <h2>Eu te amo, Moise!</h2>
          <p>
            Você ilumina meus dias, faz meu coração sorrir e torna a vida muito
            mais bonita. ❤️
          </p>

          <div
            style={{
              marginTop: "30px",
              fontSize: "2rem",
              letterSpacing: "10px",
            }}
          >
            🌹 💕 ✨ ❤️ ✨ 💕 🌹
          </div>
        </div>
      </div>
    </>
  );
}