export async function POST(request) {
  try {
    const body = await request.text();
    const metric = JSON.parse(body);
    
    // Log the web vitals data (in production, you might want to send this to an analytics service)
    console.log('Web Vitals metric received:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
      timestamp: new Date().toISOString(),
    });
    
    return new Response('OK', { status: 200 });
  } catch (error) {
    console.error('Error processing web vitals:', error);
    return new Response('Error', { status: 500 });
  }
}