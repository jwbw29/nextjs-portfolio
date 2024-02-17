export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div className="max-w-5xl w-full items-left justify-between text-sm lg:flex flex-col">
        <div>
          Header -left: logo -right: text: Home, button: Get In Touch (route
          this to /contact)
        </div>
        <div>Body: 'justin_byrd' and socials below that</div>
        <div>About Me</div>
        <div>Project 1(maybe only one until CMS gets installed)</div>
        <div>Project 2</div>
        <div>Project 3</div>
      </div>
    </main>
  );
}
