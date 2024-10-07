import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import About from "./About";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import PageLayout from "./PageLayout";
import { Routes, Route, useNavigate } from "react-router-dom";
import DataContext, { DataProvider } from "./Context/DataContext";

function App() {
  

  return (
    
    <div className="App">
      <DataProvider>
      <Header title="Social Media app"/>
      <Nav />
      <Routes>
        <Route path="/" element={<Home /> } />
      <Route path="/post" >
        <Route index element={<NewPost />} />
      
        <Route path=":id" element={<PostPage />} />
      </Route>
      <Route path="/edit/:id" element={ <EditPost />} />
      {/* <PostPage /> */}
      <Route path="about" element={ <About /> } />
      <Route path="*" element={ <Missing /> } />
      </Routes>
      <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
