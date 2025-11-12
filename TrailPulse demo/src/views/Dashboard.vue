<script setup>
import PopularTrainingWidget from '@/components/dashboard/PopularTrainingWidget.vue';
import RecentSessionsWidget from '@/components/dashboard/RecentSessionsWidget.vue';
import TrainingAlertsWidget from '@/components/dashboard/TrainingAlertsWidget.vue';
import TrainingStatsWidget from '@/components/dashboard/TrainingStatsWidget.vue';
import TrainingVolumeWidget from '@/components/dashboard/TrainingVolumeWidget.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-8">
        <TrainingStatsWidget />

        <div class="col-span-12 xl:col-span-6">
            <RecentSessionsWidget />
            <PopularTrainingWidget />
        </div>
        <div class="col-span-12 xl:col-span-6">
            <TrainingVolumeWidget />
            <TrainingAlertsWidget />
        </div>
    </div>
</template>
