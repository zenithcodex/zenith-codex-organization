import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return <div className={cn("animate-pulse bg-zenith-surface/50 rounded", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="border border-zenith-surface p-6 space-y-4 rounded-lg bg-zenith-surface/20">
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-16" />
      </div>
    </div>
  );
}

export function NewsSkeleton() {
  return (
    <div className="border-l-2 border-zenith-surface pl-6 py-4 space-y-3">
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
    </div>
  );
}

export function TeamSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 border border-zenith-surface rounded-lg bg-zenith-surface/20">
      <Skeleton className="w-12 h-12 rounded-full" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  );
}
