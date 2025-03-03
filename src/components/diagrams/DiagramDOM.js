import React from 'react';
import './Diagrams.css';

export function DiagramDOM() {
  return (
    <div className="diagram dom-diagram">
      <div className="diagram-node root">
        Document
        <div className="diagram-node">
          HTML
          <div className="diagram-node">Head</div>
          <div className="diagram-node">
            Body
            <div className="diagram-node">
              Div
              <div className="diagram-node">P</div>
              <div className="diagram-node">Button</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 