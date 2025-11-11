import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Templata';
    const subtitle = searchParams.get('subtitle') || 'Notion meets a life coach';
    const type = searchParams.get('type') || 'default'; // guide, library, default

    // Color schemes based on type
    const gradients = {
      guide: 'from-blue-600 to-purple-600',
      library: 'from-emerald-600 to-teal-600',
      default: 'from-indigo-600 to-purple-600',
    };

    const gradient = gradients[type as keyof typeof gradients] || gradients.default;

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#0a0a0a',
            padding: '80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Background gradient */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.15) 100%)`,
              opacity: 0.5,
            }}
          />

          {/* Grid pattern overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Content */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              zIndex: 10,
              maxWidth: '900px',
            }}
          >
            {/* Type badge */}
            {type !== 'default' && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 24px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '999px',
                  fontSize: '24px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  width: 'fit-content',
                }}
              >
                {type}
              </div>
            )}

            {/* Title */}
            <div
              style={{
                fontSize: '72px',
                fontWeight: 700,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              {title}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '32px',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: 400,
              }}
            >
              {subtitle}
            </div>
          </div>

          {/* Footer with logo and branding */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              zIndex: 10,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              {/* Logo placeholder - you can replace with actual SVG */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'white',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  fontWeight: 700,
                }}
              >
                T
              </div>
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: 700,
                  color: 'white',
                  letterSpacing: '-0.02em',
                }}
              >
                Templata
              </div>
            </div>

            {/* Right side - URL */}
            <div
              style={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 500,
              }}
            >
              templata.org
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error('Error generating OG image:', error);
    return new Response('Failed to generate image', { status: 500 });
  }
}
