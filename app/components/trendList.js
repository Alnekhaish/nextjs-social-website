import { Card } from "@rewind-ui/core";

export default function TrendList() {
  return (
    <div>
      <div className="flex items-center gap-x-5">
        <h1 className="text-xl font-bold">Trend For You</h1>
        <h1 className="text-xl">-</h1>
        <h1 className="text-blue-500">see all</h1>
      </div>
      <Card size="lg" shadow="none" radius="md">
        <Card.Body className="flex flex-col gap-y-3">
          <div>
            <h1 className="font-semibold">#Trend</h1>
            <h1 className="text-sm text-gray-500">12K posts</h1>
          </div>
          <div>
            <h1 className="font-semibold">#Trend</h1>
            <h1 className="text-sm text-gray-500">12K posts</h1>
          </div>
          <div>
            <h1 className="font-semibold">#Trend</h1>
            <h1 className="text-sm text-gray-500">12K posts</h1>
          </div>
          <div>
            <h1 className="font-semibold">#Trend</h1>
            <h1 className="text-sm text-gray-500">12K posts</h1>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
