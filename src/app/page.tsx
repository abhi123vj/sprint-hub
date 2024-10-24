import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex ">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="tertiary">tertiary</Button>
    </div>
  );
}
