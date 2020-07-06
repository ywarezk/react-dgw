
export default function Home() {
  return (
    <h4>
      Server Side Rendering Demo
    </h4>
  )
}

export async function getStaticProps() {
  console.log('getStaticProps');
  const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
  const tasks = await res.json();
  return {
    props: {tasks}
  };
}
