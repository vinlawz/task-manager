import { useState } from 'react';

// 1. COMPONENTS
// The building blocks of React - reusable UI pieces
const Greeting = () => {
  return <h2>Hello, React Learner!</h2>;
};

// Define interface for component props
interface WelcomeMessageProps {
  name: string;
  age?: number;  // Optional prop
}

// 2. PROPS - Passing data to components
const WelcomeMessage = ({ name, age }: WelcomeMessageProps) => {
  return (
    <p>
      Welcome, {name}! {age !== undefined && `You are ${age} years old.`}
    </p>
  );
};

// 3. STATE - Managing component data
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const reset = () => setCount(0);

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <div>
      <p id="counter-value">Count: {count}</p>
      <div className="button-group">
        <button 
          onClick={increment}
          onKeyDown={(e) => handleKeyDown(e, increment)}
          aria-label="Increment counter"
          aria-describedby="counter-value"
        >
          Increment
        </button>
        <button 
          onClick={reset}
          onKeyDown={(e) => handleKeyDown(e, reset)}
          aria-label="Reset counter to zero"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

// 4. CONDITIONAL RENDERING
const LoginStatus = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back! You are logged in.</p>
      ) : (
        <button>Please log in</button>
      )}
    </div>
  );
};

// 5. LISTS AND KEYS
const TodoList = () => {
  const [todos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Deploy to production', completed: false },
  ]);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
};

// 6. EVENT HANDLING
const ClickMe = () => {
  const handleClick = (event: React.MouseEvent) => {
    alert('Button clicked!');
    console.log('Event:', event);
  };

  return <button onClick={handleClick}>Click Me</button>;
};

// 7. FORMS AND CONTROLLED COMPONENTS
const SimpleForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Form submitted with: ${inputValue}`);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

// Main component that ties everything together
const CoreConcepts = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="core-concepts">
      <h1>Core React Concepts</h1>
      
      <section>
        <h2>1. Components</h2>
        <Greeting />
      </section>

      <section>
        <h2>2. Props</h2>
        <WelcomeMessage name="Alex" age={25} />
        <WelcomeMessage name="Taylor" />
      </section>

      <section>
        <h2>3. State</h2>
        <Counter />
      </section>

      <section>
        <h2>4. Conditional Rendering</h2>
        <button onClick={() => setShowLogin(!showLogin)}>
          Toggle Login Status
        </button>
        <LoginStatus isLoggedIn={showLogin} />
      </section>

      <section>
        <h2>5. Lists and Keys</h2>
        <TodoList />
      </section>

      <section>
        <h2>6. Event Handling</h2>
        <ClickMe />
      </section>

      <section>
        <h2>7. Forms</h2>
        <SimpleForm />
      </section>
    </div>
  );
};

export default CoreConcepts;
