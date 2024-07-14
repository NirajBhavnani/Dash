This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## <a name="introduction">🤖 Introduction</a>
Introducing Dash, a forward-thinking video conferencing solution driven by Next.js and TypeScript. Designed to deliver secure virtual meetings, Dash enhances collaboration with advanced features, setting a new standard in seamless remote communication.

## <a name="features">🔋 Features</a>

1. **Authentication:** Secure login via Clerk with social sign-on or email/password methods, ensuring appropriate access levels.
   
2. **Start Meetings:** Quickly initiate meetings, configuring camera and microphone settings beforehand.

3. **Meeting Controls:** Participants can manage recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant actions (pinning, muting, unmuting, blocking, allowing video share).

4. **End/Leave Meetings:** Smoothly exit meetings or end them for all participants.

5. **Schedule Meetings:** Input meeting details (date, time) to schedule future meetings accessible from 'Upcoming Meetings' for link sharing or immediate starts.

6. **Past Meetings:** Review a list of previous meetings, including associated details and metadata.

7. **View Recordings:** Access and review recordings of past meetings for reference or review.

8. **Personal Room:** Each user has a unique, shareable meeting link for instant access to their personal room.

9. **Join via Link:** Easily join meetings created by others by providing a link.

10. **Real-time Security:** All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

11. **Responsive Design:** Optimal user experience across devices with responsive design, adapting seamlessly to various screen sizes and resolutions.

## Getting Started

First, run the development server:

```bash
npm config set strict-ssl false
# then execute
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
