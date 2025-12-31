 import { DocShell } from "./components.docs/DocShell";
import { CodeBlock } from "./components.docs/CodeBlock";
import { PropsTable } from "./components.docs/PropsTable";


const usage = `import { Input } from "@/components/ui/input";

export default function Example() {
  return (
    <input
      className="w-full rounded-lg border px-3 py-2"
      placeholder="you@example.com"
    />
  );
}`;

export default function InputDocs() {
  return (
    <DocShell title="Input" description="Input component examples.">
      {/* Preview */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">Preview</h2>

        <div className="mt-4 max-w-2xl space-y-4">
          <input
            className="w-full rounded-lg border px-3 py-2"
            placeholder="Text input"
          />
          <input
            type="password"
            className="w-full rounded-lg border px-3 py-2"
            placeholder="Password"
          />
          <input
            disabled
            className="w-full rounded-lg border px-3 py-2 bg-gray-100"
            placeholder="Disabled input"
          />
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold">Usage</h2>
        <CodeBlock code={usage} />
      </section>

      {/* Props */}
      <PropsTable
        rows={[
          { name: "value", type: "string", default: "-", description: "Input value." },
          { name: "onChange", type: "(e) => void", default: "-", description: "Change handler." },
          { name: "placeholder", type: "string", default: "-", description: "Placeholder text." },
          { name: "type", type: "string", default: "text", description: "HTML input type." },
          { name: "disabled", type: "boolean", default: "false", description: "Disables the input." },
        ]}
      />
    </DocShell>
  );
}

