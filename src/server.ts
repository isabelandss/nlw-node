import { http } from './http'
import './websocket/client'

const PORT = process.env.PORT || 3000

http.listen(PORT, () => console.log(`server is running on port ${PORT}`))
