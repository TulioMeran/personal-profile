import DataProvider from "./contexts/dataProvider";
import MainRouter from "./routes";


function App() {
  return (
    <DataProvider>
      <MainRouter />
    </DataProvider>
      
  );
}

export default App;
