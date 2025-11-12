<script setup>
import { TrainingService } from '@/service/TrainingService';
import { onMounted, ref } from 'vue';

const trainingSessions = ref(null);

function formatDuration(minutes) {
    if (minutes) {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (hours > 0) {
            return `${hours}h ${mins}m`;
        }
        return `${mins}m`;
    }
    return;
}

function formatPace(secondsPerKm) {
    if (secondsPerKm) {
        const minutes = Math.floor(secondsPerKm / 60);
        const seconds = secondsPerKm % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}/km`;
    }
    return;
}

onMounted(() => {
    TrainingService.getRecentSessions().then((data) => (trainingSessions.value = data));
});
</script>

<template>
    <div class="card">
        <div class="font-semibold text-xl mb-4">Recent Training Sessions</div>
        <DataTable :value="trainingSessions" :rows="5" :paginator="true" responsiveLayout="scroll">
            <Column style="width: 20%" header="Type">
                <template #body="slotProps">
                    <Tag :value="slotProps.data.sportType" :severity="slotProps.data.sportType === 'running' ? 'info' : slotProps.data.sportType === 'cycling' ? 'success' : 'warning'" />
                </template>
            </Column>
            <Column field="name" header="Session" :sortable="true" style="width: 30%"></Column>
            <Column field="duration" header="Duration" :sortable="true" style="width: 25%">
                <template #body="slotProps">
                    {{ formatDuration(slotProps.data.duration) }}
                </template>
            </Column>
            <Column style="width: 25%" header="Details">
                <template #body="slotProps">
                    <Button icon="pi pi-chart-line" type="button" class="p-button-text" :label="slotProps.data.distance ? `${slotProps.data.distance}km` : 'View'" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>