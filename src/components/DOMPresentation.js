import React, { useState } from 'react';
import './DOMPresentation.css';
import { DiagramDOM } from './diagrams/DiagramDOM';
import { DiagramVirtualDOM } from './diagrams/DiagramVirtualDOM';
import { VirtualDOMAnimation } from './VirtualDOMAnimation';

function DOMPresentation() {
  const [section, setSection] = useState('intro');
  const [reactText, setReactText] = useState('Texte initial avec React');
  const [vanillaClicks, setVanillaClicks] = useState(0);
  const [reactClicks, setReactClicks] = useState(0);

  // Fonction pour manipuler le DOM directement
  const handleVanillaClick = () => {
    const element = document.getElementById('vanilla-text');
    if (element) {
      element.textContent = `Texte modifié ${vanillaClicks + 1} fois`;
      setVanillaClicks(prev => prev + 1);
    }
  };

  return (
    <div className="dom-tutorial">
      {/* Navigation */}
      <nav className="tutorial-nav">
        <button 
          className={section === 'intro' ? 'active' : ''} 
          onClick={() => setSection('intro')}
        >
          1. Introduction
        </button>
        <button 
          className={section === 'concepts' ? 'active' : ''} 
          onClick={() => setSection('concepts')}
        >
          2. Concepts DOM
        </button>
        <button 
          className={section === 'comparison' ? 'active' : ''} 
          onClick={() => setSection('comparison')}
        >
          3. Comparaison
        </button>
        <button 
          className={section === 'practice' ? 'active' : ''} 
          onClick={() => setSection('practice')}
        >
          4. Pratique
        </button>
        <button 
          className={section === 'details' ? 'active' : ''} 
          onClick={() => setSection('details')}
        >
          5. Détails Avancés
        </button>
        <button 
          className={section === 'examples' ? 'active' : ''} 
          onClick={() => setSection('examples')}
        >
          6. Exemples Réels
        </button>
        <button 
          className={section === 'dom-vs-vdom' ? 'active' : ''} 
          onClick={() => setSection('dom-vs-vdom')}
        >
          7. DOM vs Virtual DOM
        </button>
        <button 
          className={section === 'virtual-dom-deep' ? 'active' : ''} 
          onClick={() => setSection('virtual-dom-deep')}
        >
          8. Virtual DOM en Détail
        </button>
      </nav>

      {/* Contenu des sections */}
      <div className="tutorial-content">
        {section === 'intro' && (
          <section className="intro-section">
            <h2>Introduction au DOM et React</h2>
            <div className="concept-box">
              <h3>🌳 Le DOM (Document Object Model)</h3>
              <p>Interface de programmation qui représente la structure d'une page web comme un arbre d'objets.</p>
              <div className="dom-tree">
                <pre>
                  {`
document
  └── html
       ├── head
       └── body
            ├── header
            └── main
                 └── div
                `}
                </pre>
              </div>
            </div>

            <div className="concept-box">
              <h3>⚛️ React</h3>
              <p>Bibliothèque JavaScript pour créer des interfaces utilisateur dynamiques et performantes.</p>
              <ul>
                <li>Basé sur des composants</li>
                <li>Utilise un DOM Virtuel</li>
                <li>Gestion efficace des mises à jour</li>
              </ul>
            </div>
          </section>
        )}

        {section === 'concepts' && (
          <section className="concepts-section">
            <h2>Concepts du DOM</h2>
            <div className="concept-comparison">
              <div className="concept-box">
                <h3>🌐 DOM Réel</h3>
                <p>Représentation directe de la page HTML</p>
                <ul>
                  <li>Structure complète du document</li>
                  <li>Mises à jour coûteuses</li>
                  <li>Manipulations directes</li>
                </ul>
              </div>

              <div className="concept-box">
                <h3>💡 DOM Virtuel</h3>
                <p>Copie légère en mémoire du DOM réel</p>
                <ul>
                  <li>Optimisation des performances</li>
                  <li>Comparaison intelligente</li>
                  <li>Mises à jour groupées</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {section === 'comparison' && (
          <section className="comparison-section">
            <h2>Comparaison des Approches</h2>
            <div className="comparison-table">
              <table>
                <thead>
                  <tr>
                    <th>Caractéristique</th>
                    <th>DOM Traditionnel</th>
                    <th>React</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Performance</td>
                    <td>Lente pour les mises à jour fréquentes</td>
                    <td>Rapide grâce au Virtual DOM</td>
                  </tr>
                  <tr>
                    <td>Complexité</td>
                    <td>Augmente avec la taille de l'application</td>
                    <td>Gérée par les composants</td>
                  </tr>
                  <tr>
                    <td>Maintenance</td>
                    <td>Difficile pour les grandes applications</td>
                    <td>Facilitée par l'architecture</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {section === 'practice' && (
          <section className="practice-section">
            <h2>Pratique Interactive</h2>
            
            <div className="example-container">
              <div className="example-box">
                <h3>DOM Traditionnel</h3>
                <p id="vanilla-text">Texte initial avec DOM traditionnel</p>
                <button onClick={handleVanillaClick}>
                  Modifier (Clicks: {vanillaClicks})
                </button>
              </div>

              <div className="example-box">
                <h3>React</h3>
                <p>{reactText}</p>
                <button onClick={() => {
                  setReactText(`Texte modifié ${reactClicks + 1} fois`);
                  setReactClicks(prev => prev + 1);
                }}>
                  Modifier (Clicks: {reactClicks})
                </button>
              </div>
            </div>
          </section>
        )}

        {section === 'details' && (
          <section className="details-section">
            <h2>Détails Avancés du DOM et React</h2>

            <div className="detail-box">
              <h3>🔄 Cycle de Vie du DOM</h3>
              <DiagramDOM />
              <div className="code-example">
                <h4>Exemple de Manipulation DOM</h4>
                <pre>
                  {`// Création d'éléments
const div = document.createElement('div');
div.className = 'container';
div.innerHTML = '<p>Nouveau contenu</p>';
document.body.appendChild(div);

// Modification d'éléments
const element = document.getElementById('monId');
element.style.backgroundColor = 'blue';
element.classList.add('active');

// Suppression d'éléments
const oldElement = document.getElementById('aSupprimer');
oldElement.parentNode.removeChild(oldElement);

// Événements
element.addEventListener('click', (e) => {
  console.log('Élément cliqué !');
  e.preventDefault();
});`}
                </pre>
              </div>
            </div>

            <div className="detail-box">
              <h3>⚛️ React Rendering Process</h3>
              <DiagramVirtualDOM />
              <div className="code-example">
                <h4>Exemple de Composant React</h4>
                <pre>
                  {`import React, { useState, useEffect } from 'react';

function MonComposant() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation d'un appel API
    fetch('https://api.exemple.com/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Chargement...</div>;

  return (
    <div className="container">
      {data.map(item => (
        <div key={item.id} className="item">
          {item.name}
        </div>
      ))}
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </section>
        )}

        {section === 'examples' && (
          <section className="examples-section">
            <h2>Exemples Réels d'Applications</h2>

            <div className="example-box real-world">
              <h3>🔍 Exemple 1: Recherche en Temps Réel</h3>
              <div className="live-demo">
                <input 
                  type="text" 
                  placeholder="Tapez pour rechercher..."
                  onChange={(e) => {
                    // DOM Traditionnel
                    document.getElementById('resultDom').textContent = 
                      `Recherche: ${e.target.value}`;
                  }}
                />
                <div id="resultDom">Résultat DOM</div>
              </div>
              <div className="code-comparison">
                <div className="code-block">
                  <h4>Version DOM Traditionnel</h4>
                  <pre>
                    {`// DOM Traditionnel
const input = document.querySelector('input');
input.addEventListener('input', (e) => {
  const result = document.getElementById('result');
  result.textContent = \`Recherche: \${e.target.value}\`;
});`}
                  </pre>
                </div>
                <div className="code-block">
                  <h4>Version React</h4>
                  <pre>
                    {`// React
function SearchComponent() {
  const [search, setSearch] = useState('');
  
  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>Recherche: {search}</div>
    </div>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="example-box real-world">
              <h3>📝 Exemple 2: Liste de Tâches</h3>
              <div className="code-comparison">
                <div className="code-block">
                  <h4>DOM Traditionnel</h4>
                  <pre>
                    {`// DOM Traditionnel
function addTask(text) {
  const list = document.getElementById('taskList');
  const li = document.createElement('li');
  li.textContent = text;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Supprimer';
  deleteBtn.onclick = () => li.remove();
  
  li.appendChild(deleteBtn);
  list.appendChild(li);
}`}
                  </pre>
                </div>
                <div className="code-block">
                  <h4>React</h4>
                  <pre>
                    {`// React
function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, text]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => removeTask(index)}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
}`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}

        {section === 'dom-vs-vdom' && (
          <section className="dom-vs-vdom-section">
            <h2>DOM vs Virtual DOM : Comprendre la Différence</h2>

            <div className="explanation-box">
              <h3>🌳 Le DOM (Document Object Model)</h3>
              <p>Le DOM est une représentation en arbre de votre page HTML où chaque élément est un nœud.</p>
              
              <div className="visual-example">
                <div className="html-code">
                  <h4>Code HTML</h4>
                  <pre>
                    {`<div id="app">
  <header>
    <h1>Titre</h1>
  </header>
  <main>
    <p>Paragraphe</p>
  </main>
</div>`}
                  </pre>
                </div>
                
                <div className="dom-representation">
                  <h4>Représentation DOM</h4>
                  <div className="tree-visualization">
                    <div className="node">
                      <span>div#app</span>
                      <div className="children">
                        <div className="node">
                          <span>header</span>
                          <div className="children">
                            <div className="node">
                              <span>h1</span>
                            </div>
                          </div>
                        </div>
                        <div className="node">
                          <span>main</span>
                          <div className="children">
                            <div className="node">
                              <span>p</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="explanation-box">
              <h3>⚡ Le Virtual DOM</h3>
              <p>Le Virtual DOM est une copie légère du DOM réel, stockée en mémoire et synchronisée avec le vrai DOM.</p>
              
              <div className="process-explanation">
                <h4>Processus de mise à jour</h4>
                <div className="process-steps">
                  <div className="step">
                    <span className="step-number">1</span>
                    <p>État initial du Virtual DOM</p>
                  </div>
                  <div className="step">
                    <span className="step-number">2</span>
                    <p>Changement d'état dans React</p>
                  </div>
                  <div className="step">
                    <span className="step-number">3</span>
                    <p>Création d'un nouveau Virtual DOM</p>
                  </div>
                  <div className="step">
                    <span className="step-number">4</span>
                    <p>Comparaison (Diffing)</p>
                  </div>
                  <div className="step">
                    <span className="step-number">5</span>
                    <p>Mise à jour du DOM réel</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="comparison-box">
              <h3>🔄 Comparaison des Performances</h3>
              <div className="performance-demo">
                <div className="demo-scenario">
                  <h4>Scénario : Mise à jour de 1000 éléments</h4>
                  <div className="scenario-comparison">
                    <div className="scenario-dom">
                      <h5>DOM Traditionnel</h5>
                      <p>Chaque élément est mis à jour individuellement</p>
                      <pre>
                        {`// Mise à jour DOM traditionnelle
for (let i = 0; i < 1000; i++) {
  const element = document.getElementById(\`item-\${i}\`);
  element.textContent = 'Nouveau texte';
  element.style.color = 'red';
}`}
                      </pre>
                    </div>
                    <div className="scenario-vdom">
                      <h5>Virtual DOM</h5>
                      <p>Les mises à jour sont regroupées et optimisées</p>
                      <pre>
                        {`// Mise à jour React
setState(newState); // Une seule mise à jour
// React gère automatiquement 
// la mise à jour optimisée des 1000 éléments`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="key-benefits">
              <h3>✨ Avantages du Virtual DOM</h3>
              <ul>
                <li>
                  <strong>Performance optimisée</strong>
                  <p>Minimise les manipulations directes du DOM</p>
                </li>
                <li>
                  <strong>Mises à jour groupées</strong>
                  <p>Combine plusieurs changements en une seule mise à jour</p>
                </li>
                <li>
                  <strong>Cross-platform</strong>
                  <p>Permet le rendu sur différentes plateformes (web, mobile)</p>
                </li>
                <li>
                  <strong>Développement simplifié</strong>
                  <p>Les développeurs se concentrent sur l'état de l'application</p>
                </li>
              </ul>
            </div>
          </section>
        )}

        {section === 'virtual-dom-deep' && (
          <section className="virtual-dom-deep-section">
            <h2>Le Virtual DOM en Profondeur</h2>

            <div className="concept-explanation">
              <h3>🔍 Qu'est-ce que le Virtual DOM ?</h3>
              <p>Le Virtual DOM est une représentation en mémoire du DOM réel, sous forme d'objets JavaScript.</p>
              
              <div className="code-visualization">
                <div className="real-dom-code">
                  <h4>DOM Réel (HTML)</h4>
                  <pre>
                    {`<div class="user-card">
  <h2>John Doe</h2>
  <p>Age: 30</p>
</div>`}
                  </pre>
                </div>

                <div className="virtual-dom-code">
                  <h4>Virtual DOM (Objet JavaScript)</h4>
                  <pre>
                    {`{
  type: 'div',
  props: {
    className: 'user-card',
    children: [
      {
        type: 'h2',
        props: {
          children: 'John Doe'
        }
      },
      {
        type: 'p',
        props: {
          children: 'Age: 30'
        }
      }
    ]
  }
}`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="process-explanation">
              <h3>⚙️ Comment fonctionne le Virtual DOM ?</h3>
              
              <div className="process-steps-detailed">
                <div className="step-detailed">
                  <h4>1. Création et Mise à jour du Virtual DOM</h4>
                  <p>Visualisation du processus de mise à jour avec le Virtual DOM</p>
                  <VirtualDOMAnimation />
                  <div className="technical-details">
                    <h5>Détails Techniques</h5>
                    <ul>
                      <li>Le Virtual DOM est une représentation JavaScript légère du DOM réel</li>
                      <li>Chaque élément est un objet avec des propriétés et des enfants</li>
                      <li>Les mises à jour sont d'abord effectuées sur le Virtual DOM</li>
                      <li>L'algorithme de diffing identifie les changements minimaux nécessaires</li>
                    </ul>
                  </div>
                </div>

                <div className="step-detailed">
                  <h4>2. État Change</h4>
                  <p>Quand setState() est appelé ou les props changent :</p>
                  <pre>
                    {`// Exemple de changement d'état
setState({ age: 31 });`}
                  </pre>
                </div>

                <div className="step-detailed">
                  <h4>3. Nouveau Virtual DOM</h4>
                  <p>React crée une nouvelle version du Virtual DOM avec les changements.</p>
                  <div className="diff-visualization">
                    <div className="old-vdom">
                      <h5>Ancien Virtual DOM</h5>
                      <pre>
                        {`{
  ...
  children: 'Age: 30'
  ...
}`}
                      </pre>
                    </div>
                    <div className="new-vdom">
                      <h5>Nouveau Virtual DOM</h5>
                      <pre>
                        {`{
  ...
  children: 'Age: 31'
  ...
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="step-detailed">
                  <h4>4. Algorithme de Diffing</h4>
                  <p>React compare les deux versions du Virtual DOM (Reconciliation)</p>
                  <div className="diff-explanation">
                    <h5>Règles de Comparaison :</h5>
                    <ul>
                      <li>Différents types d'éléments produisent différentes arborescences</li>
                      <li>Les éléments avec des 'key' stables sont préservés</li>
                      <li>Comparaison niveau par niveau</li>
                    </ul>
                  </div>
                </div>

                <div className="step-detailed">
                  <h4>5. Mise à jour Minimale</h4>
                  <p>Seuls les changements nécessaires sont appliqués au DOM réel</p>
                  <div className="update-visualization">
                    <pre>
                      {`// Seule cette opération est effectuée
document.querySelector('p').textContent = 'Age: 31';`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="performance-benefits">
              <h3>📈 Avantages en Performance</h3>
              <div className="benefits-grid">
                <div className="benefit-card">
                  <h4>Mises à jour Groupées</h4>
                  <p>Plusieurs changements sont regroupés en une seule mise à jour du DOM</p>
                  <pre>
                    {`// Au lieu de multiples mises à jour
setState({ name: 'Jane' });
setState({ age: 31 });
setState({ role: 'Dev' });

// Une seule mise à jour du DOM est effectuée`}
                  </pre>
                </div>

                <div className="benefit-card">
                  <h4>Comparaison Efficace</h4>
                  <p>L'algorithme de diffing est optimisé pour être rapide</p>
                  <ul>
                    <li>Comparaison O(n) où n est le nombre de nœuds</li>
                    <li>Heuristiques pour des cas communs</li>
                    <li>Mise à jour sélective</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="best-practices">
              <h3>✨ Bonnes Pratiques</h3>
              <div className="practices-list">
                <div className="practice-item">
                  <h4>Utiliser des Keys</h4>
                  <pre>
                    {`// Bon exemple
{items.map(item => (
  <li key={item.id}>{item.text}</li>
))}`}
                  </pre>
                </div>

                <div className="practice-item">
                  <h4>Éviter les Mises à jour Inutiles</h4>
                  <pre>
                    {`// Utiliser React.memo pour les composants purs
const MemoizedComponent = React.memo(MyComponent);

// Utiliser useCallback pour les fonctions
const handler = useCallback(() => {
  // logique
}, [dependency]);`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default DOMPresentation;