import React, { useState, useEffect } from 'react';
import './VirtualDOMAnimation.css';

export function VirtualDOMAnimation() {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setStep((prev) => (prev < 4 ? prev + 1 : 0));
      }, 2000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const steps = [
    {
      title: "État Initial",
      realDOM: (
        <div className="dom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div>Age: 30</div>
        </div>
      ),
      virtualDOM: (
        <div className="vdom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div>Age: 30</div>
        </div>
      )
    },
    {
      title: "Changement d'État",
      realDOM: (
        <div className="dom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight">Age: 30</div>
        </div>
      ),
      virtualDOM: (
        <div className="vdom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight">Age: 31</div>
        </div>
      )
    },
    {
      title: "Diffing",
      realDOM: (
        <div className="dom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight">Age: 30</div>
        </div>
      ),
      virtualDOM: (
        <div className="vdom-node diff-active">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight diff">Age: 31</div>
        </div>
      )
    },
    {
      title: "Réconciliation",
      realDOM: (
        <div className="dom-node updating">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight updating">Age: 31</div>
        </div>
      ),
      virtualDOM: (
        <div className="vdom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div className="highlight">Age: 31</div>
        </div>
      )
    },
    {
      title: "Mise à jour terminée",
      realDOM: (
        <div className="dom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div>Age: 31</div>
        </div>
      ),
      virtualDOM: (
        <div className="vdom-node">
          <div>User Card</div>
          <div>Name: John</div>
          <div>Age: 31</div>
        </div>
      )
    }
  ];

  return (
    <div className="virtual-dom-animation">
      <div className="animation-controls">
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸ Pause" : "▶️ Play"}
        </button>
        <div className="step-indicator">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`step-dot ${index === step ? 'active' : ''}`}
              onClick={() => {
                setIsPlaying(false);
                setStep(index);
              }}
            />
          ))}
        </div>
      </div>

      <div className="animation-stage">
        <div className="dom-container">
          <h4>DOM Réel</h4>
          {steps[step].realDOM}
        </div>
        <div className="vdom-container">
          <h4>Virtual DOM</h4>
          {steps[step].virtualDOM}
        </div>
      </div>

      <div className="step-explanation">
        <h4>{steps[step].title}</h4>
        <p>{getStepExplanation(step)}</p>
      </div>
    </div>
  );
}

function getStepExplanation(step) {
  const explanations = [
    "Les deux DOMs sont synchronisés. Le Virtual DOM est une copie légère du DOM réel en mémoire.",
    "Un changement d'état est déclenché (setState). Le Virtual DOM est mis à jour avec la nouvelle valeur.",
    "React compare (diffing) le Virtual DOM avec sa version précédente pour identifier les changements.",
    "Les différences identifiées sont appliquées au DOM réel de manière optimisée.",
    "La mise à jour est terminée, les deux DOMs sont à nouveau synchronisés."
  ];
  return explanations[step];
} 