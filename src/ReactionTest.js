// import React, { useState, useEffect, useRef } from "react";

// export default function ReactionTest() {
//   const [gameState, setGameState] = useState("waiting"); // waiting, ready, click
//   const [message, setMessage] = useState("Click to Start");
//   const [reactionTime, setReactionTime] = useState(null);
//   const [bestScore, setBestScore] = useState(
//     localStorage.getItem("bestScore") || null
//   );
//   const [leaderboard, setLeaderboard] = useState(
//     JSON.parse(localStorage.getItem("leaderboard")) || []
//   );
//   const timeoutRef = useRef(null);
//   const startTimeRef = useRef(null);

//   // Start the game
//   const handleClick = () => {
//     if (gameState === "waiting") {
//       setMessage("Wait for green...");
//       setGameState("ready");

//       const randomDelay = Math.floor(Math.random() * 4000) + 1000; // 1-5s
//       timeoutRef.current = setTimeout(() => {
//         setMessage("CLICK NOW!");
//         setGameState("click");
//         startTimeRef.current = Date.now();
//       }, randomDelay);
//     } else if (gameState === "ready") {
//       // Clicked too early
//       clearTimeout(timeoutRef.current);
//       setMessage("Too soon! Click to try again");
//       setGameState("waiting");
//     } else if (gameState === "click") {
//       const time = Date.now() - startTimeRef.current;
//       setReactionTime(time);
//       setMessage(`Your reaction time: ${time} ms. Click to try again`);
//       setGameState("waiting");

//       // Update best score
//       if (!bestScore || time < bestScore) {
//         setBestScore(time);
//         localStorage.setItem("bestScore", time);
//       }

//       // Update leaderboard
//       const updatedLeaderboard = [...leaderboard, time]
//         .sort((a, b) => a - b)
//         .slice(0, 5);
//       setLeaderboard(updatedLeaderboard);
//       localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));
//     }
//   };

//   return (
//     <div
//       onClick={handleClick}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         backgroundColor:
//           gameState === "click" ? "#4caf50" : gameState === "ready" ? "#ff5722" : "#2196f3",
//         transition: "background-color 0.5s ease",
//         color: "#fff",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         cursor: "pointer",
//       }}
//     >
//       <div
//         style={{
//           fontSize: "2rem",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//           textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {message}
//       </div>

//       {reactionTime && (
//         <div
//           style={{
//             fontSize: "1.2rem",
//             marginBottom: "1rem",
//             opacity: 0.8,
//           }}
//         >
//           Last Reaction: {reactionTime} ms
//         </div>
//       )}

//       {bestScore && (
//         <div
//           style={{
//             fontSize: "1.2rem",
//             marginBottom: "1rem",
//             opacity: 0.8,
//           }}
//         >
//           Best Score: {bestScore} ms
//         </div>
//       )}

//       {leaderboard.length > 0 && (
//         <div
//           style={{
//             fontSize: "1rem",
//             marginTop: "2rem",
//             backgroundColor: "rgba(0,0,0,0.2)",
//             padding: "1rem 2rem",
//             borderRadius: "10px",
//             animation: "fadeIn 0.8s ease",
//           }}
//         >
//           <h3>Leaderboard (Top 5)</h3>
//           <ol>
//             {leaderboard.map((time, index) => (
//               <li key={index}>{time} ms</li>
//             ))}
//           </ol>
//         </div>
//       )}

//       {/* Add simple fadeIn animation */}
//       <style>
//         {`
//           @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//           }
//         `}
//       </style>
//     </div>
//   );
// }









// import React, { useState, useEffect, useRef } from "react";

// export default function BubbleReactionGame() {
//   const [gameState, setGameState] = useState("waiting"); // waiting, ready, click
//   const [message, setMessage] = useState("Click to Start");
//   const [reactionTime, setReactionTime] = useState(null);
//   const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore") || null);
//   const [bubbles, setBubbles] = useState([]);
//   const timeoutRef = useRef(null);
//   const startTimeRef = useRef(null);

//   const handleStart = () => {
//     if (gameState === "waiting") {
//       setMessage("Get Ready...");
//       setGameState("ready");

//       const randomDelay = Math.floor(Math.random() * 3000) + 1000; // 1-4s
//       timeoutRef.current = setTimeout(() => {
//         setMessage("POP THE BUBBLE!");
//         setGameState("click");
//         startTimeRef.current = Date.now();

//         // Generate bubbles
//         const bubbleArray = Array.from({ length: 5 }).map((_, i) => ({
//           id: i,
//           x: Math.random() * 80 + 10 + "%",
//           y: Math.random() * 60 + 20 + "%",
//           popped: false,
//         }));
//         setBubbles(bubbleArray);
//       }, randomDelay);
//     }
//   };

//   const handleBubbleClick = (id) => {
//     if (gameState === "click") {
//       const time = Date.now() - startTimeRef.current;
//       setReactionTime(time);
//       setMessage(`Great! Your reaction time: ${time} ms. Click to try again`);
//       setGameState("waiting");

//       // Mark bubble as popped
//       setBubbles((prev) => prev.map(b => b.id === id ? { ...b, popped: true } : b));

//       // Update best score
//       if (!bestScore || time < bestScore) {
//         setBestScore(time);
//         localStorage.setItem("bestScore", time);
//       }
//     }
//   };

//   const handleEarlyClick = () => {
//     if (gameState === "ready") {
//       clearTimeout(timeoutRef.current);
//       setMessage("Too soon! Click to try again");
//       setGameState("waiting");
//     }
//   };

//   return (
//     <div
//       onClick={handleEarlyClick}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor:
//           gameState === "click" ? "#4caf50" : gameState === "ready" ? "#ff5722" : "#2196f3",
//         transition: "background-color 0.5s ease",
//         color: "#fff",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         overflow: "hidden",
//         position: "relative",
//         cursor: "pointer",
//       }}
//     >
//       <div
//         style={{
//           fontSize: "2rem",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//           textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {message}
//       </div>

//       {reactionTime && (
//         <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
//           Last Reaction: {reactionTime} ms
//         </div>
//       )}

//       {bestScore && (
//         <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
//           Best Score: {bestScore} ms
//         </div>
//       )}

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           handleStart();
//         }}
//         style={{
//           padding: "1rem 2rem",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           border: "none",
//           borderRadius: "10px",
//           background: "#ff4081",
//           color: "#fff",
//           cursor: "pointer",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//           transition: "all 0.2s ease",
//         }}
//         onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.95)"}
//         onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
//       >
//         Start Game
//       </button>

//       {/* Bubbles */}
//       {bubbles.map((bubble) =>
//         !bubble.popped ? (
//           <div
//             key={bubble.id}
//             onClick={(e) => {
//               e.stopPropagation();
//               handleBubbleClick(bubble.id);
//             }}
//             style={{
//               position: "absolute",
//               top: bubble.y,
//               left: bubble.x,
//               width: "50px",
//               height: "50px",
//               borderRadius: "50%",
//               background: "red",
//               boxShadow: "0 0 15px rgba(255,0,0,0.6)",
//               animation: "popIn 0.3s ease",
//               cursor: "pointer",
//               transition: "transform 0.2s",
//             }}
//             onMouseDown={(e) => e.currentTarget.style.transform = "scale(0.8)"}
//             onMouseUp={(e) => e.currentTarget.style.transform = "scale(1)"}
//           />
//         ) : null
//       )}

//       <style>
//         {`
//           @keyframes popIn {
//             from { transform: scale(0); opacity: 0; }
//             to { transform: scale(1); opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }




// import React, { useState, useRef } from "react";

// export default function BubbleReactionGame() {
//   const [gameState, setGameState] = useState("waiting"); // waiting, ready, clicking
//   const [message, setMessage] = useState("Click Start to Play");
//   const [reactionTime, setReactionTime] = useState(null);
//   const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore") || null);
//   const [bubbles, setBubbles] = useState([]);
//   const startTimeRef = useRef(null);
//   const timeoutRef = useRef(null);

//   const startGame = () => {
//     if (gameState === "waiting") {
//       setMessage("Get ready...");
//       setGameState("ready");

//       const randomDelay = Math.floor(Math.random() * 3000) + 1000; // 1-4s
//       timeoutRef.current = setTimeout(() => {
//         setMessage("POP ALL BUBBLES!");
//         setGameState("clicking");

//         // Generate 5-6 bubbles at random positions
//         const bubbleCount = 6;
//         const newBubbles = Array.from({ length: bubbleCount }).map((_, i) => ({
//           id: i,
//           x: Math.random() * 80 + 10 + "%",
//           y: Math.random() * 60 + 20 + "%",
//           popped: false,
//         }));
//         setBubbles(newBubbles);

//         startTimeRef.current = Date.now();
//       }, randomDelay);
//     }
//   };

//   const popBubble = (id) => {
//     setBubbles((prev) =>
//       prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
//     );

//     // Check if all bubbles are popped
//     const allPopped = bubbles.every((b) => b.id === id || b.popped);
//     if (allPopped) {
//       const time = Date.now() - startTimeRef.current;
//       setReactionTime(time);
//       setMessage(`Great! Your reaction time: ${time} ms. Click Start to play again`);
//       setGameState("waiting");

//       if (!bestScore || time < bestScore) {
//         setBestScore(time);
//         localStorage.setItem("bestScore", time);
//       }
//     }
//   };

//   const handleEarlyClick = () => {
//     if (gameState === "ready") {
//       clearTimeout(timeoutRef.current);
//       setMessage("Too soon! Click Start to try again");
//       setGameState("waiting");
//     }
//   };

//   return (
//     <div
//       onClick={handleEarlyClick}
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor:
//           gameState === "clicking" ? "#4caf50" : gameState === "ready" ? "#ff5722" : "#2196f3",
//         transition: "background-color 0.5s ease",
//         color: "#fff",
//         fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//         overflow: "hidden",
//         position: "relative",
//         cursor: "pointer",
//       }}
//     >
//       <div
//         style={{
//           fontSize: "2rem",
//           fontWeight: "bold",
//           marginBottom: "1rem",
//           textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
//           transition: "all 0.3s ease",
//         }}
//       >
//         {message}
//       </div>

//       {reactionTime && (
//         <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
//           Last Reaction: {reactionTime} ms
//         </div>
//       )}

//       {bestScore && (
//         <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
//           Best Score: {bestScore} ms
//         </div>
//       )}

//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           startGame();
//         }}
//         style={{
//           padding: "1rem 2rem",
//           fontSize: "1rem",
//           fontWeight: "bold",
//           border: "none",
//           borderRadius: "10px",
//           background: "#ff4081",
//           color: "#fff",
//           cursor: "pointer",
//           boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//           transition: "all 0.2s ease",
//         }}
//         onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
//         onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
//       >
//         Start Game
//       </button>

//       {/* Bubbles */}
//       {bubbles.map(
//         (bubble) =>
//           !bubble.popped && (
//             <div
//               key={bubble.id}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 popBubble(bubble.id);
//               }}
//               style={{
//                 position: "absolute",
//                 top: bubble.y,
//                 left: bubble.x,
//                 width: "50px",
//                 height: "50px",
//                 borderRadius: "50%",
//                 background: "red",
//                 boxShadow: "0 0 15px rgba(255,0,0,0.6)",
//                 animation: "popIn 0.3s ease",
//                 cursor: "pointer",
//                 transition: "transform 0.2s",
//               }}
//               onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.8)")}
//               onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             />
//           )
//       )}

//       <style>
//         {`
//           @keyframes popIn {
//             from { transform: scale(0); opacity: 0; }
//             to { transform: scale(1); opacity: 1; }
//           }
//         `}
//       </style>
//     </div>
//   );
// }




import React, { useState, useRef, useEffect } from "react";

// Sound files (place them in public/sounds folder or use URLs)
import popSoundFile from "../src/assets/sound/sons__bubble-3.wav";
import winSoundFile from "../src/assets/sound/yoshicakes77__win.ogg";

export default function BubbleReactionGame() {
  const [gameState, setGameState] = useState("waiting"); // waiting, ready, clicking
  const [message, setMessage] = useState("Click Start to Play");
  const [reactionTime, setReactionTime] = useState(null);
  const [bestScore, setBestScore] = useState(localStorage.getItem("bestScore") || null);
  const [bubbles, setBubbles] = useState([]);
  const [combo, setCombo] = useState(0);
  const [difficulty, setDifficulty] = useState("Easy"); // Easy, Medium, Hard
  const startTimeRef = useRef(null);
  const timeoutRef = useRef(null);

//   const popSound = useRef(new Audio(popSoundUrl));
//   const winSound = useRef(new Audio(winSoundUrl));

const popSound = useRef(new Audio(popSoundFile));
const winSound = useRef(new Audio(winSoundFile));


  // Bubble configuration based on difficulty
  const difficultyConfig = {
    Easy: { count: 5, size: 50 },
    Medium: { count: 7, size: 40 },
    Hard: { count: 10, size: 30 },
  };

  const startGame = () => {
    if (gameState === "waiting") {
      setMessage("Get ready...");
      setGameState("ready");
      setCombo(0);

      const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1-3s
      timeoutRef.current = setTimeout(() => {
        setMessage("POP ALL BUBBLES!");
        setGameState("clicking");

        // Generate bubbles
        const { count, size } = difficultyConfig[difficulty];
        const newBubbles = Array.from({ length: count }).map((_, i) => ({
          id: i,
          x: Math.random() * 80 + 10 + "%",
          y: Math.random() * 60 + 20 + "%",
          popped: false,
          size: size,
        }));
        setBubbles(newBubbles);

        startTimeRef.current = Date.now();
      }, randomDelay);
    }
  };

  const popBubble = (id) => {
    setBubbles((prev) =>
      prev.map((b) => (b.id === id ? { ...b, popped: true } : b))
    );

    popSound.current.currentTime = 0;
    popSound.current.play();

    setCombo((prev) => prev + 1);

    // Check if all bubbles are popped
    const allPopped = bubbles.every((b) => b.id === id || b.popped);
    if (allPopped) {
      const time = Date.now() - startTimeRef.current;
      setReactionTime(time);

      // Play win sound
      winSound.current.currentTime = 0;
      winSound.current.play();

      // Dynamic messages based on performance
      let msg = "";
      if (time < 300) msg = "Incredible reflexes!";
      else if (time < 500) msg = "Great job!";
      else msg = "Keep practicing!";

      setMessage(`All Bubbles Popped! ${msg} Time: ${time} ms`);
      setGameState("waiting");

      // Update best score
      if (!bestScore || time < bestScore) {
        setBestScore(time);
        localStorage.setItem("bestScore", time);
      }

      // Show confetti (simple CSS effect)
      triggerConfetti();
    }
  };

  const handleEarlyClick = () => {
    if (gameState === "ready") {
      clearTimeout(timeoutRef.current);
      setMessage("Too soon! Click Start to try again");
      setGameState("waiting");
    }
  };

  // Simple confetti animation
  const triggerConfetti = () => {
    const container = document.createElement("div");
    container.style.position = "absolute";
    container.style.top = 0;
    container.style.left = 0;
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.overflow = "hidden";

    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = "8px";
      confetti.style.height = "8px";
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.top = "0px";
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.opacity = Math.random();
      confetti.style.borderRadius = "50%";
      confetti.style.transform = `translateY(0px) rotate(0deg)`;
      confetti.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
      container.appendChild(confetti);
    }

    document.body.appendChild(container);
    setTimeout(() => document.body.removeChild(container), 4000);
  };

  return (
    <div
      onClick={handleEarlyClick}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:
          gameState === "clicking"
            ? "#4caf50"
            : gameState === "ready"
            ? "#ff5722"
            : "#2196f3",
        transition: "background-color 0.5s ease",
        color: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          transition: "all 0.3s ease",
        }}
      >
        {message}
      </div>

      {reactionTime && (
        <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
          Last Reaction: {reactionTime} ms
        </div>
      )}

      {bestScore && (
        <div style={{ fontSize: "1.2rem", marginBottom: "1rem", opacity: 0.9 }}>
          Best Score: {bestScore} ms
        </div>
      )}

      <div style={{ marginBottom: "1rem" }}>
        <label>
          Difficulty:{" "}
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            style={{
              fontSize: "1rem",
              padding: "0.3rem 0.5rem",
              borderRadius: "5px",
              border: "none",
            }}
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          startGame();
        }}
        style={{
          padding: "1rem 2rem",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          background: "#ff4081",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          transition: "all 0.2s ease",
          marginBottom: "1rem",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        Start Game
      </button>

      <div style={{ fontSize: "1rem", marginBottom: "1rem" }}>Combo: {combo}</div>

      {/* Bubbles */}
      {bubbles.map(
        (bubble) =>
          !bubble.popped && (
            <div
              key={bubble.id}
              onClick={(e) => {
                e.stopPropagation();
                popBubble(bubble.id);
              }}
              style={{
                position: "absolute",
                top: bubble.y,
                left: bubble.x,
                width: bubble.size + "px",
                height: bubble.size + "px",
                borderRadius: "50%",
                background: "red",
                boxShadow: "0 0 15px rgba(255,0,0,0.6)",
                animation: `popIn 0.3s ease, float ${2 + Math.random()}s ease-in-out infinite alternate`,
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.8)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          )
      )}

      <style>
        {`
          @keyframes popIn {
            from { transform: scale(0); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            100% { transform: translateY(15px); }
          }
          @keyframes fall {
            to { transform: translateY(100vh) rotate(360deg); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
