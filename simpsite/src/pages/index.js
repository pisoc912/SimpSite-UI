import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/about'>
        <button>
          hello
        </button>
      </Link>
    </div>
  )
}

export default Home;