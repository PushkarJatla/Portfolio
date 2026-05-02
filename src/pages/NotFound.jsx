import { ArrowLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <p className="text-8xl font-bold text-gradient">404</p>
        <h1 className="text-2xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary inline-flex">
          <ArrowLeft size={16} />
          Back to Home
        </a>
      </div>
    </div>
  );
};
