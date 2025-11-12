<template>
    <div class="card">
        <div class="font-semibold text-2xl mb-6">Running Health & Safety Guide</div>
        
        <div class="font-semibold text-xl mb-4">Why Proper Running Form Matters</div>
        <p class="text-lg mb-4">
            Good running technique isn't just about speed - it's about staying injury-free and enjoying your runs for years to come. Proper form can reduce impact on your joints and prevent common running injuries.
        </p>

        <div class="font-semibold text-xl mb-4">Common Running Form Issues</div>
        <ul class="leading-normal list-disc pl-8 text-lg mb-6">
            <li><span class="text-primary font-medium">Overstriding</span>: Landing with your foot too far in front of your body</li>
            <li><span class="text-primary font-medium">Forward Lean</span>: Bending too much at the waist</li>
            <li><span class="text-primary font-medium">Knee Valgus</span>: Knees collapsing inward during stride</li>
            <li><span class="text-primary font-medium">Low Cadence</span>: Taking too few steps per minute</li>
        </ul>

        <div class="font-semibold text-xl mb-4">Simple Form Corrections</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="bg-surface-50 dark:bg-surface-800 p-4 rounded-lg">
                <div class="font-semibold text-lg mb-2">Posture Check</div>
                <p>Imagine a string pulling you up from the top of your head. Keep your chest up and shoulders relaxed.</p>
            </div>
            <div class="bg-surface-50 dark:bg-surface-800 p-4 rounded-lg">
                <div class="font-semibold text-lg mb-2">Foot Strike</div>
                <p>Try to land with your foot under your body, not in front. This reduces braking impact.</p>
            </div>
            <div class="bg-surface-50 dark:bg-surface-800 p-4 rounded-lg">
                <div class="font-semibold text-lg mb-2">Arm Position</div>
                <p>Keep elbows bent at 90 degrees and swing arms forward and back, not across your body.</p>
            </div>
            <div class="bg-surface-50 dark:bg-surface-800 p-4 rounded-lg">
                <div class="font-semibold text-lg mb-2">Breathing Rhythm</div>
                <p>Breathe deeply from your diaphragm. Try a 3:2 pattern (inhale 3 steps, exhale 2 steps).</p>
            </div>
        </div>

        <div class="font-semibold text-xl mb-4">Hong Kong Trail Safety Tips</div>
        <ul class="leading-normal list-disc pl-8 text-lg mb-6">
            <li>Stay hydrated - Hong Kong's humidity can lead to quick dehydration</li>
            <li>Wear visible clothing, especially during dawn/dusk hours</li>
            <li>Be aware of uneven surfaces on Hong Kong's beautiful mountain trails</li>
            <li>Carry your phone and let someone know your planned route</li>
            <li>Respect wildlife and other trail users</li>
        </ul>

        <div class="font-semibold text-xl mb-4">Weekly Training Balance</div>
        <p class="text-lg mb-4">
            For optimal health benefits, aim for this weekly mix (based on ACSM guidelines):
        </p>
        <div class="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg mb-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                    <div class="font-semibold text-lg">150 mins</div>
                    <div class="text-sm">Moderate Aerobic Activity</div>
                </div>
                <div>
                    <div class="font-semibold text-lg">2 sessions</div>
                    <div class="text-sm">Strength Training</div>
                </div>
                <div>
                    <div class="font-semibold text-lg">Daily</div>
                    <div class="text-sm">Flexibility & Balance</div>
                </div>
            </div>
        </div>

        <div class="font-semibold text-xl mb-4">Recovery & Injury Prevention</div>
        <div class="space-y-4 mb-6">
            <div class="flex items-start">
                <i class="pi pi-check-circle text-primary mt-1 mr-3"></i>
                <div>
                    <div class="font-medium">Listen to Your Body</div>
                    <p class="text-sm text-surface-600 dark:text-surface-400">Pain is different from discomfort. Learn the difference and rest when needed.</p>
                </div>
            </div>
            <div class="flex items-start">
                <i class="pi pi-check-circle text-primary mt-1 mr-3"></i>
                <div>
                    <div class="font-medium">Gradual Progression</div>
                    <p class="text-sm text-surface-600 dark:text-surface-400">Increase distance or intensity by no more than 10% per week.</p>
                </div>
            </div>
            <div class="flex items-start">
                <i class="pi pi-check-circle text-primary mt-1 mr-3"></i>
                <div>
                    <div class="font-medium">Cross-Training</div>
                    <p class="text-sm text-surface-600 dark:text-surface-400">Include swimming, cycling, or yoga to prevent overuse injuries.</p>
                </div>
            </div>
        </div>

        <div class="font-semibold text-xl mb-4">Popular Hong Kong Running Routes</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
                <div class="font-semibold mb-2">Bowen Road Fitness Trail</div>
                <p class="text-sm text-surface-600 dark:text-surface-400">Flat, shaded path perfect for beginners and recovery runs.</p>
            </div>
            <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
                <div class="font-semibold mb-2">Lung Fu Shan Country Park</div>
                <p class="text-sm text-surface-600 dark:text-surface-400">Hilly terrain for strength building and hill training.</p>
            </div>
            <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
                <div class="font-semibold mb-2">Victoria Harbour Promenade</div>
                <p class="text-sm text-surface-600 dark:text-surface-400">Scenic flat route with beautiful harbor views.</p>
            </div>
            <div class="border border-surface-200 dark:border-surface-700 rounded-lg p-4">
                <div class="font-semibold mb-2">Dragon's Back Trail</div>
                <p class="text-sm text-surface-600 dark:text-surface-400">Challenging trail run with stunning coastal views.</p>
            </div>
        </div>

        <div class="bg-surface-100 dark:bg-surface-800 rounded-lg p-6 text-center">
            <div class="font-semibold text-lg mb-2">Ready to Improve Your Running?</div>
            <p class="mb-4">StrideCare HK helps you run smarter and safer with personalized form feedback</p>
            <Button label="Get Started" as="router-link" icon="pi pi-play" class="p-button-primary" to="/" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'HealthGuide'
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 991px) {
    .video-container {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}
</style>