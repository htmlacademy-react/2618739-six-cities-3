import Main from '../../pages/main/main';

type MainPageProps = {
    rentCount: number;
}

function App({ rentCount }: MainPageProps): JSX.Element {
  return (<Main rentCount={rentCount} />);
}
export default App;
