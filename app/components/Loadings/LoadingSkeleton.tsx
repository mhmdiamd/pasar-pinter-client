export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
      <div className="h-10 bg-gray-200 rounded animate-pulse" />
    </div>
  );
}

export function TextSkeleton({ width = "w-full" }: { width?: string }) {
  return <div className={`h-4 bg-gray-200 rounded animate-pulse ${width}`} />;
}

export function ImageSkeleton() {
  return <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />;
}
