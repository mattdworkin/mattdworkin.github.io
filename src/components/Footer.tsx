export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container px-4 py-8">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Matthew Dworkin
        </p>
      </div>
    </footer>
  )
}
