// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

interface MessagesType extends NextApiRequest {
	query: {
		message?: string
	}
}

export default function handler(req: MessagesType, res: NextApiResponse): void {
	//res.status(200).json({ name: 'John Doe' });
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({
		message: req.query.message ?? 'Base message'
	}));
}
