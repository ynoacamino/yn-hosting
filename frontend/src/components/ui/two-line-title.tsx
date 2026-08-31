import Title from "@/components/ui/title";

interface TwoLineTitleProps {
  line1?: string | null;
  line2?: string | null;
  className?: string;
}

export function TwoLineTitle({ line1, line2, className }: TwoLineTitleProps) {
  return (
    <Title className={className}>
      <span>{line1}</span>
      <span>{line2}</span>
    </Title>
  );
}
