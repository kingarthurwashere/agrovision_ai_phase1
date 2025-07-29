
interface Props {
  result: any;
}

export default function ResultCard({ result }: Props) {
  return (
    <div className="mt-4 bg-gray-100 p-4 rounded-lg">
      <h3 className="font-bold text-lg mb-2">Prediction Results</h3>
      <pre className="text-sm">{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}
