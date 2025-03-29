function showTab(tabId) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Показываем выбранную вкладку
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}
