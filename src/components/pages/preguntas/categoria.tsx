import Section from '@/components/ui/section';
import Title from '@/components/ui/title';

export default function Categoria(
  { category, questions }: { category: string, questions: { question: string, answer: string }[] },
) {
  return (
    <Section className="flex flex-col gap-16 my-20">
      <Title className="max-w-lg">
        {category}
      </Title>
      <div className="grid grid-cols-2 gap-8">
        {
          questions.map(({ question, answer }) => (
            <div key={question} className="p-6 gap-6 rounded-xl border-2 border-[#24282F] bg-[#171B22] text-xl flex flex-col">
              <span className="w-full text-2xl">
                {question}
              </span>
              <div className="text-base flex flex-col gap-4" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>
          ))
        }
      </div>
    </Section>
  );
}
