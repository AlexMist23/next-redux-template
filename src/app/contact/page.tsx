/* Components */
import Nav from "@/components/Nav";

export default function Page() {
  return (
    <main>
      <Nav />
      <h1>About</h1>
      <p>
        This page is intended to verify that Redux state is persisted across
        page navigations.
      </p>
    </main>
  );
}
