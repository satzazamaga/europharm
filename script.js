function showTab(tabId) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    // Показываем выбранную вкладку
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}
