import { Button, Link } from './components/controls'
import { Heading, Subheading } from './components/typography'

function App (): JSX.Element {
  return (
    <main className="flex h-full w-full flex-col gap-4 bg-black text-white">
      <div>
        <Heading size="lg">Heading</Heading>
        <Subheading size="lg" className="mb-4">Subheading</Subheading>
        <Heading size="md">Heading</Heading>
        <Subheading size="md" className="mb-4">Subheading</Subheading>
        <Heading size="sm">Heading</Heading>
        <Subheading size="sm" className="mb-4">Subheading</Subheading>
      </div>
      <div className="flex gap-2">
        <Button href="#" variant="primary">Primary</Button>
        <Button href="#" variant="primary" ghost>Ghost</Button>
      </div>
      <div className="flex gap-2">
        <Button href="#" variant="secondary">Secondary</Button>
        <Button href="#" variant="secondary" ghost>Ghost</Button>
      </div>
      <div className="flex gap-2">
        <Button href="#" variant="primary" disabled>Disabled</Button>
        <Button href="#" variant="primary" ghost disabled>Ghost</Button>
      </div>
      <div className="flex gap-2">
      <Button href="#" external>External</Button>
      <Button href="#" external ghost>Ghost</Button>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget sapien ut justo <Link href="#">laoreet consectetur</Link>. Sed luctus vulputate lorem vitae pellentesque. Aliquam ut pellentesque enim. Aenean <Link href="https://google.com" external>pulvinar</Link> erat eu lacinia semper. Duis elit dui, lacinia eu blandit sit amet, consectetur non est. Nullam ac mi placerat, lacinia ante porttitor, ultricies ex. Mauris lacus velit, sodales ut massa non, sagittis vehicula nisl.</p>
    </main>
  )
}

export default App
