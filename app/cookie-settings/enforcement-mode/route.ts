import { NextRequest, NextResponse } from 'next/server';
import { loadFixture, replayResponse } from '@/lib/replay';

// Captured route: GET /cookie-settings/enforcement-mode
// Replace the fixture response with real business logic when ready.

export async function GET(req: NextRequest) {

  const fixture = loadFixture('GET_cookie-settings_enforcement-mode', 'GET', 200);
  if (fixture !== null) {
    return replayResponse(fixture);
  }

  return NextResponse.json({ ok: true });
}
