import React from 'react';
import './Diagrams.css';

export function DiagramVirtualDOM() {
  return (
    <div className="diagram virtual-dom-diagram">
      <div className="process-flow">
        <div className="step">
          <div className="step-title">1. État Initial</div>
          <div className="step-content">Virtual DOM</div>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <div className="step-title">2. Changement d'État</div>
          <div className="step-content">Nouveau Virtual DOM</div>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <div className="step-title">3. Diffing</div>
          <div className="step-content">Comparaison</div>
        </div>
        <div className="arrow">→</div>
        <div className="step">
          <div className="step-title">4. Mise à jour</div>
          <div className="step-content">DOM Réel</div>
        </div>
      </div>
    </div>
  );
} 