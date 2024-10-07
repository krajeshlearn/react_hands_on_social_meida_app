import React from 'react'

const Route_backup = () => {

    return (

        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/newpost">NewPost</Link></li>
                <li><Link to="/postpage">PostPage</Link></li>
            </ul>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/newpost" element={<NewPost />} />
                {/* <Route path="/postpage" element={<PostPage />} />
  <Route path="/postpage/:id" element={<Post />} />
  <Route path="/postpage/newpost" element={<NewPost />} /> */}
                <Route path="/postpage" element={<PageLayout />}>
                    <Route index element={<PostPage />} />
                    <Route path=":id" element={<Post />} />
                    <Route path="newpost" element={<NewPost />} />
                </Route>
                {/* <Router path="*" element={<Missing />} /> */}
            </Routes>
        </div>
    )
}

export default Route_backup