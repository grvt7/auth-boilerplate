import Counter from '@/components/Counter';
import TestCompo from '@/components/TestComp';

export default async function Home() {
  return (
    <div className="w-full h-full">
      <Counter />
      <TestCompo />
    </div>
  );
}
