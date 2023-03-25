// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/inline';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './components/Form.js'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp  from './components/PureComp';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo';
import FocusInputClassRef from './components/focusInputClassRef';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
function App() {


  return (
    <div className="App">
      {/* <Greet name="Bruce" heroName="Batman">
        <p>Hi This is a children props</p>
      </Greet>
      <Greet name="clark" heroName="Superman" />
      <p>Hi This is one more children props</p>
      <Greet name="hina" heroName="wonderwoman" />

      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="clark" heroName="Superman" />
      <Welcome name="hina" heroName="wonderwoman" /> */}
      <Message />
      {/* <Hello /> */}
      <Greet name="clark" heroName="Superman" />

      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>

      <EventBind></EventBind>

      <ParentComponent></ParentComponent>

      <UserGreeting></UserGreeting>
      <NameList/>
      {/* video No:20 */}
      <h2>Video No:20 [CSS and Styling]</h2>
      <Stylesheet primary = { true }/>
      <Inline></Inline>
      <h2 className='error'>regular css</h2>
      <h2 className={styles.success}>CSS module</h2>
      <Form/>
      <LifecycleA/>
      <FragmentDemo/>
      <Table/>
      {/* <PureComp/> */}
      <ParentComp/>

      {/* <RefsDemo/> */}

      {/* <FocusInputClassRef/> */}
      <FRParentInput/>
      {/* <PortalDemo/> */}
    </div>
  );


}

export default App;
