import { cn } from '@/lib/utils'

interface GradientBlurProps {
  position: 'top' | 'bottom'
}

export default function GradientBlur({ position }: GradientBlurProps) {
  return (
    <div
      className={cn(
        'fixed left-0 right-0 z-40 pointer-events-none',
        position === 'top' ? 'top-0 h-40' : 'bottom-0 h-32'
      )}
    >
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 backdrop-blur-[4px]" />
      <div className="absolute inset-0 backdrop-blur-[8px]" />
      <div className="absolute inset-0 backdrop-blur-[16px]" />
      <div className="absolute inset-0 backdrop-blur-[32px]" />
      <div
        className="absolute inset-0 backdrop-blur-[64px]"
        style={{
          maskImage:
            position === 'top'
              ? 'linear-gradient(to top, transparent 0%, black 100%)'
              : 'linear-gradient(to bottom, transparent 0%, black 100%)',
          WebkitMaskImage:
            position === 'top'
              ? 'linear-gradient(to top, transparent 0%, black 100%)'
              : 'linear-gradient(to bottom, transparent 0%, black 100%)',
        }}
      />
    </div>
  )
}
