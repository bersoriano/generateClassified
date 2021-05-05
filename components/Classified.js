
export default function Classified(props) {

    return (
        <div className="classified">
          <h2>My item</h2>
          <span>Description lorem ipsum Description lorem ipsum Description lorem ipsum Description lorem ipsum Description lorem ipsum</span>
          <ul style={{display: 'flex', listStyle: 'none', padding: 0}}>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul>
          <span>Size</span>
          <style jsx>{`
            .classified {
            border: 1px solid silver;
            padding: 1rem 2rem;
            margin: 2rem;
            min-width: 30vw;
            max-width: 40vw;
            min-height: 30vh;
            border-radius: 1rem;
        }
        `}</style>          
        </div>          
    );
}