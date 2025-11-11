export async function POST(request: any) {

  const { input } = await request.json().catch(() => ({ input: '' }));

  return Response.json({ ok: true, echoed: input ?? '' });

}

