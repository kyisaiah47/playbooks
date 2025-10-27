import { Check, X } from "lucide-react";

export function ComparisonTable() {
  const features = [
    { name: "Expert-curated guides", templata: true, chatgpt: false, notion: false },
    { name: "Structured frameworks", templata: true, chatgpt: false, notion: false },
    { name: "Curated readings", templata: true, chatgpt: false, notion: false },
    { name: "Flexible workspace", templata: true, chatgpt: false, notion: true },
    { name: "Progress tracking", templata: true, chatgpt: false, notion: true },
    { name: "No hallucinations", templata: true, chatgpt: false, notion: true },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-3 px-3 font-medium text-sm">Feature</th>
            <th className="text-center py-3 px-3 font-medium text-sm">Templata</th>
            <th className="text-center py-3 px-3 font-medium text-sm text-muted-foreground">ChatGPT</th>
            <th className="text-center py-3 px-3 font-medium text-sm text-muted-foreground">Notion</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, i) => (
            <tr key={i} className="border-b border-border/40">
              <td className="py-3 px-3 text-sm">{feature.name}</td>
              <td className="py-3 px-3 text-center">
                {feature.templata ? (
                  <Check className="w-4 h-4 text-foreground mx-auto" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                )}
              </td>
              <td className="py-3 px-3 text-center">
                {feature.chatgpt ? (
                  <Check className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                )}
              </td>
              <td className="py-3 px-3 text-center">
                {feature.notion ? (
                  <Check className="w-4 h-4 text-muted-foreground/50 mx-auto" />
                ) : (
                  <X className="w-4 h-4 text-muted-foreground/30 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
