export function getStaticData() {
  return {
    title: 'My Static Post',
    date: '2024-06-01',
    content: 'This is a static post created with getStaticData.',
  };
}

//Each object must have the params key and contain an object with the id key 
// (because we’re using [id] in the file name). 
// Otherwise, getStaticPaths will fail.
export function getAllPostIds() {
  return [
    { params: { id: 'first-post' } },
    { params: { id: 'second-post' } },
  ];
}

export function getPostData(id) {
  const posts = {
    'first-post': {
      title: 'First Post',
      date: '2024-06-01',
      content: 'This is the first static post.',
    },
    'second-post': {
      title: 'Second Post',
      date: '2024-06-02',
      content: 'This is the second static post.',
    },
  };
  return posts[id];
}
