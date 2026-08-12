import React from "react";
import { cn } from "../../lib/utils";
import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  icon?: React.ReactNode;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  className, 
  text = "Imagem a ser definida",
  icon = <ImageIcon className="w-8 h-8 opacity-50" />
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-novaag-beige to-novaag-offwhite border-2 border-dashed border-novaag-medium/20 text-novaag-petrol/60 min-h-[200px] rounded-lg",
      className
    )}>
      {icon}
      <span className="mt-2 text-sm font-medium">{text}</span>
    </div>
  );
};
